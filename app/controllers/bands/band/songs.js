import Controller from '@ember/controller';
import Song from 'rarwe/models/song';
import { empty } from '@ember/object/computed';


export default Controller.extend({
    isAddingSong: false,
    newSongName: '',

    isAddButtonDisabled: empty('newSongTitle'),

    actions: { 
        addSong()   {
            this.set('isAddingSong', true);
        },

        cancelAddSong() {
            this.set('isAddingSong', false);
        },

        saveSong()  {
            event.preventDefault();
            let newSong = Song.create({ title: this.newSongTitle });
            this.model.songs.pushObject(newSong);
            this.set('newSongTitle', '');
        },

        updateRating(params) {
            let { item: song, rating } = params;
            song.set('rating', rating);
        }
    }
});
