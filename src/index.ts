import { Command } from "commander";
import defaultEndpoint from "./defaultEndpoint";
import main from "./main";

const program = new Command();

program
  .name('constructor-detector')
  .description('CLI to find constructor argument in ethereum based chain contracts')
  .requiredOption('-e, --endpoint <url>', 'RPC endpoint url', defaultEndpoint)
  .requiredOption('-t, --types <url>', 'Constructor types (Example: uint,string,address)', )
  .argument('<hash>', 'Tx of creating transactions')
  .action(main)

program.parse();
