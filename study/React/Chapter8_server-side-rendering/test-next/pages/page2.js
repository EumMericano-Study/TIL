import { callApi } from "../src/api"
import Head from "next/head";
import Router from "next/router";

export default class Page2 extends React.Component {
    static async getInitialProps({ query }){
        const text = query.text || 'none';
        const data = await callApi();
        return { text, data };
    }
    onClick = () => {
        Router.push('/page1');
    };
    render() {
        const { text, data } = this.props;
        return (
            <div>
                <Head>
                    <title>page2</title>
                </Head>
                <p>this is home page2</p>
                <p>{`text: ${text}`}</p>
                <p>{`data is ${data}`}</p>
                <button onClick={this.onClick}>page1으로 이동</button>
            </div>
        )
    } 
}