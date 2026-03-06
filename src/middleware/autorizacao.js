

export class Autorization {
	static permitirPerfil(perfisPermitidos) {
		return (req, res, next) => {
        const perfil = req.user && req.user.perfil;

        if( perfisPermitidos.includes(perfil)){
            return next();
        }
        return res.status(403).json({ message: "Acesso negado" });

		};
	}
    static aluno (req, res, next) {
        return Autorization.permitirPerfil(['aluno'])(req, res, next);
    }
    static professor (req, res, next) {
        return Autorization.permitirPerfil(['professor'])(req, res, next);
    }
}
