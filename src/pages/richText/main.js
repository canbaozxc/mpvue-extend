/**
 * Created by dave on 2018/3/21.
 */
import Vue from 'vue';
import App from './index';

const app = new Vue(App);
app.$mount()

export default {
    config: {
        navigationBarTitleText: '爱买单富文本',
        navigationBarBackgroundColor: '#D75243',
    },
};