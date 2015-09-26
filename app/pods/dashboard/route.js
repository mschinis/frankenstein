import Ember from 'ember';
import User from '../user/model';
import RequestMixin from '../../mixins/request';

export default Ember.Route.extend(RequestMixin,{
    model(){
        let userPromise = User.find();
        userPromise.then((users)=>{
            console.log(`users`,users);

            return {
                users : [
                    {
                        id: 1,
                        full_name: 'Michael Schinis'
                    }
                ]
            };
        });
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
