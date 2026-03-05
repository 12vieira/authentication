import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verificarToken = (req, res, next) => {
    try {
        const header = req.headers["authorization"];
        const token = header && header.split(" ")[1]; // Extrai o token do formato "Bearer "
        if (!token) {
            return res.status(401).json({ error: "Token não fornecido" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }
        req.user = decoded; // Armazena as informações do usuário decodificado na requisição
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
};