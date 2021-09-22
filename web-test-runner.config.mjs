import rollupCommonjs  from '@rollup/plugin-commonjs';
import { fromRollup } from '@web/dev-server-rollup';

const commonjs = fromRollup(rollupCommonjs);

export default {
    nodeResolve: true,
    plugins: [
        commonjs({
            include: ["**/node_modules/@xmldom/xmldom/lib/*.js"]
        })
    ]
};