// console.log('global', Object.keys(global))
['global',
  'process',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout']
// console.log('process', Object.keys(process))
[
  'platform',
  'argv',
  'cwd',
  'env',
  'nextTick']
// console.log('env', process.env);
// console.log('platform', process.platform); // darwin win32
// console.log('获取当前目录 cwd', process.cwd());
// console.log('获取终端命令参数 argv', process.argv);

// 手动封装argv
function getArgv () {
  return process.argv.reduce((memo, cur, index) => {
    if (cur.startsWith('--')) {
      console.log('index', index)
      memo[cur.slice(2)] = process.argv[index + 1]
    }
    return memo
  }, {})
}
// console.log('getArgv', getArgv())
// 使用公共npm依赖包实现
const { program } = require('commander');
program.version('0.0.1');
program
  .option('-p, --port')
  .option('-h, --host <host>')
  .option('-pp, --pizza-type <type>', 'flavour of pizza');
program.parse(process.argv);
// console.log(program.port);
// console.log(program.host);
// console.log(program.pizzaType);

// 文件包裹着隐藏的函数（export、require、module、__dirname、__filename就是入参）
// console.log('arguments', arguments);
console.log('__dirname', __dirname);
console.log('__filename', __filename);

