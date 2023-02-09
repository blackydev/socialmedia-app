import { createLogger, transports, format } from "winston";
import "express-async-errors";

const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.prettyPrint(),
        format.simple()
      ),
    }),
    new transports.File({
      filename: "./logs/logfile.log",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
  exceptionHandlers: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.prettyPrint(),
        format.simple()
      ),
    }),
    new transports.File({ filename: "./logs/exceptions.log" }),
  ],
  exitOnError: true,
});

export default logger;
