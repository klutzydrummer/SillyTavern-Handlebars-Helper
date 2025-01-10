import { Handlebars } from '../../../../../lib.js';

Handlebars.registerHelper("eq", function(value_a, value_b) {
    return value_a == value_b;
});

Handlebars.registerHelper("neq", function(value_a, value_b) {
    return value_a != value_b;
});

Handlebars.registerHelper("retTrue", function() {
    return true;
});

Handlebars.registerHelper("retFalse", function() {
    return false;
});