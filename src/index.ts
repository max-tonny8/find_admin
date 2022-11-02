import { Command } from "commander";
import main from "./main";

const program = new Command();
program
  .name('constructor-detector')
  .description('CLI to find constructor argument in ethereum based chain contracts')
  .requiredOption('-e, --endpoint <url>', 'RPC endpoint url', process.env.ENDPOINT)
  .requiredOption('-t, --types <url>', 'Constructor types (Example: uint,string,address)', process.env.ENDPOINT)
//   .argument('<address>', 'Contract address')
  .argument('<hash>', 'Tx of creating transactions')
  .action(main)

program.parse();
