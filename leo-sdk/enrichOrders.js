const path = require('path')
process.env.LEO_LOCAL = true
process.env.NODE_ENV = 'local'
process.env.LEO_LOGGER = '/.*/tide'
process.env.leo_config_bootstrap_path = process.cwd()+ path.sep + 'leo_config.js'

