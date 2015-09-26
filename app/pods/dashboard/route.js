import Ember from 'ember';
import RequestMixin from '../../mixins/request';

export default Ember.Route.extend(RequestMixin,{
    model(){
        let users = [
            {
                id: 1,
                full_name: 'Michael Schinis',
                group: 1
            },
            {
                id: 2,
                full_name: 'Mattia Asti',
                group: 1
            }
        ];

        return {
            users
        };
    },
    actions: {
        callUser(user){
            console.log('calling user',user);
            this.request({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users'
            }).then((res)=>{
                console.log('Done request',res);
            }).then((res)=>{
                console.warn('Failed calling user');
            });
        }
    }
});
