const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        const uri = 'mongodb+srv://sharmamehul8448:m1e2h3u4l5@cluster0.p0cndgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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
