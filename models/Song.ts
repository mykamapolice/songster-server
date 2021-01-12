import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    difficulty: {type: String, required: true},
    instrument: {type: String, required: true},
    // tracks: [{type: Object, required: true}], //[{player: name, track: track}]
    text: String,
    midi: {type: Buffer, required: true},
});

SongSchema
    .virtual('url')
    .get(function () {
        return '/song/' + this._id;
    });

const Song = mongoose.model('Song', SongSchema);

export default Song;