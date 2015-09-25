import Ember from 'ember';

export default Ember.Route.extend({
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
            console.log('Do a request to the api in the future :D');
        }
    }
});
