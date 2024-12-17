import colors from "colors";
import dotenv from "dotenv";


dotenv.config();
dotenv.config({ path: "../.env" });

colors.enable();

const COLORS_ENABLED = Number(process.env.COLORS_ENABLED) || 0;

export default function (prefix) {
  
  const colorize = (name, type) => {
    if (!COLORS_ENABLED) return name; 
    switch (type) {
      case "log":
        return colors.green(name); 
      case "warn":
        return colors.yellow(name); 
      default:
        return name; 
    }
  };

  return {
    log: (message) => {
      console.log(`${colorize(prefix, "log")}: ${message}`);
    },
    warn: (message) => {
      console.error(`${colorize(prefix, "warn")}: ${message}`);
    },
  };
}
