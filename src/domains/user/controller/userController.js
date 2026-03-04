const User = require("../models/userModel");

class UserController {
  static async list(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: "Failed to list users" });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Failed to get user" });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.passwordHash); // Replace with proper password hashing in production
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { id: user.id, 
          email: user.email, 
        }, 
        process.env.JWT_SECRET, 
        { 
          expiresIn: process.env.JWT_EXPIRES_IN 
        });

      return res.status(200).json({ message: "Successful login", token });
    } catch (error) {
      return res.status(500).json({ message: "Login failed" });
    }
  }

  static async create(req, res) {
    try {
      const { name, email, passwordHash, role, isActive } = req.body;

      const user = await User.create({
        name,
        email,
        passwordHash,
        role,
        isActive,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Failed to create user" });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, passwordHash, role, isActive } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.update({ name, email, passwordHash, role, isActive });

      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: "Failed to update user" });
    }
  }

  static async remove(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.destroy();

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Failed to remove user" });
    }
  }
}

module.exports = UserController;
