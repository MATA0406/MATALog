import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

import { adjectives, nouns } from './words';
import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

export const generateSecret = () => {
  const randonNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randonNumber]} ${nouns[randonNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: 'jinho_46@naver.com',
    to: adress,
    subject: '로그인 Secret Key 발송!',
    html: `안녕하세요. 당신의 Secret Key는 ${secret} 입니다.<br/>앱 또는 웹사이트에 로그인 하기 위해 복사하여 붙여넣어주세요.`,
  };
  return sendMail(email);
};
