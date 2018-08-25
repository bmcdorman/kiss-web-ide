const env = (name: string) => process.env[`KISS_WEB_IDE_${name.toLocaleUpperCase()}`];

export default {
  port: +env('port') || 8080
};