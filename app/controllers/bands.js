import Controller from '@ember/controller';

export default Controller.extend({
    isAddingBand: false,
    actions: {
        addBand() {
            this.set('isAddingBand', true);
        },
    }
});
