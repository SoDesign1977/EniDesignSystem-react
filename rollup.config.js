import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import {terser} from "rollup-plugin-terser"
import postcss from 'postcss'
import scss from 'rollup-plugin-scss'
import svg from 'rollup-plugin-svg'
// import {postcss as rollupcss} from "rollup-plugin-postcss"
import autoprefixer from 'autoprefixer'
export default[
    {
        input:"./src/index.js",
        output:[
            {
                file:"dist/index.js",
                format:"cjs"
            }
        ],
        plugins:[
      
            scss({
                processor: () => postcss([autoprefixer()]),
                // prefix: `@import "./src/styles/index.scss";`,
                // sass: require('node-sass'),
                output:"./dist/index.css",
                outputStyle: 'compressed',
              }),
            babel({
                exclude:"node_modules/**",
                presets:["@babel/preset-react"]
            }),
            external(),
            resolve(),
            terser(),
            svg(),
        ]
    }
]