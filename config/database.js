const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        const uri = 'mongodb+srv://vikramviks0802:ei6kTjyQQjnoletR@cluster0.kalkm7h.mongodb.net/?retryWrites=true&w=majority';
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('DB Connected');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
};

module.exports = connectDB;
