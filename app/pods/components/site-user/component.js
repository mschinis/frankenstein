import Ember from 'ember';

export default Ember.Component.extend({
    // Required input parameters
    user: {},
    callAction: null,
    // Actions
    actions:{
        callUser(){
            this.sendAction('callUser',this.get('user'));
        }
    }
});
