import { Command } from "commander";
import CommandAction from "./CommandAction";
import defaultEndpoint from "./defaultEndpoint";
import main from "./main";

const program = new Command();

program
  .name('constructor-detector')
  .description('CLI to find constructor argument in ethereum based chain contracts')
  .requiredOption('-e, --endpoint <url>', 'RPC endpoint url', defaultEndpoint)
  .requiredOption('-t, --types <url>', 'Constructor types (Example: uint,string,address)', )
  .argument('<hash>', 'Tx of creating transactions')
  .action(CommandAction)

program.parse();
