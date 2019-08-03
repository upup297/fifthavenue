const path = require("path");
module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"https://apim.restful.5lux.com.cn/",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
            }
        }
    }
}