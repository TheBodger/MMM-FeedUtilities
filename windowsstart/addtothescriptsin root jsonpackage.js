"scripts": {
    "start": "DISPLAY=\"${DISPLAY:=:0}\" ./node_modules/.bin/electron js/electron.js",
        "windows": "./node_modules/.bin/electron js/electron.js",
            "server": "node ./serveronly",
                "install": "echo \"Installing vendor files ...\n\" && cd vendor && npm install --loglevel=error",
                    "install-fonts": "echo \"Installing fonts ...\n\" && cd fonts && npm install --loglevel=error",
                        "postinstall": "npm run install-fonts && echo \"MagicMirror installation finished successfully! \n\"",
                            "test": "NODE_ENV=test ./node_modules/mocha/bin/mocha tests --recursive",
                                "test:unit": "NODE_ENV=test ./node_modules/mocha/bin/mocha tests/unit --recursive",
                                    "test:e2e": "NODE_ENV=test ./node_modules/mocha/bin/mocha tests/e2e --recursive",
                                        "test:lint": "grunt --env=test",
                                            "config:check": "node tests/configs/check_config.js",
                                                "lint": "grunt --env=lint"
},