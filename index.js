var fis = module.exports = require('fis')
fis.require.prefixes = ['pct','fis']
fis.cli.name = 'pct'
fis.cli.info = fis.util.readJSON(__dirname + '/package.json')
fis.cli.help.commands = ['init']