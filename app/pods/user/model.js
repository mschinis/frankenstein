import Ember from 'ember';
import RequestMixin from '../../mixins/request';

let User = Ember.Object.extend(RequestMixin,{

});

User.reopenClass(RequestMixin,{
    find(data={}){
        return this.request({
            method: 'GET',
            url: this.apiURL(`users`),
            data: data
        });
    }
});

export default User;
