const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        const uri = 'mongodb+srv://sharmamehul8448:LPSSvyiSg5ieZkYJ@cluster1.rw4huov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
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
