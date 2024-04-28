import HtmlWebpackPlugin = require("html-webpack-plugin");
import webpack = require("webpack");
export namespace entry {
    const js: string;
    const ts: string;
}
export namespace output {
    const path: string;
    const chunkFilename: string;
    const assetModuleFilename: string;
    namespace environment {
        export const arrowFunction: boolean;
        const _const: boolean;
        export { _const as const };
    }
    const clean: boolean;
}
export namespace module {
    const rules: ({
        test: RegExp;
        use: string[];
        include: string[];
        type: string;
        loader?: undefined;
        options?: undefined;
        generator?: undefined;
    } | {
        test: string;
        loader: string;
        options: {
            exposes: string[];
        };
        use?: undefined;
        include?: undefined;
        type?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        use: string[];
        include: string[];
        type?: undefined;
        loader?: undefined;
        options?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        use: string[];
        include?: undefined;
        type?: undefined;
        loader?: undefined;
        options?: undefined;
        generator?: undefined;
    } | {
        test: RegExp;
        type: string;
        generator: {
            filename: string;
        };
        use?: undefined;
        include?: undefined;
        loader?: undefined;
        options?: undefined;
    })[];
}
export const plugins: (HtmlWebpackPlugin | webpack.DefinePlugin | webpack.ProgressPlugin)[];
export namespace devServer {
    const open: boolean;
    const hot: boolean;
}
