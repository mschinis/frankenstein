/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    id(i){return i;},
    full_name: faker.name.findName,
    phone_number: faker.phone.phoneNumber
});
