import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

import paasport from 'passport';
import JwtStrategy from 'passport-jwt';

const jwtOptions = {
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
    secret: process.env.JWT_SECRET
}

const verifyUser = (payload, done) => {
    try{
        
    }
}

passport.use(new JwtStrategy(jwtOptions, verifyUser))