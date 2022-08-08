import {v4 as uuidv4} from 'uuid'
function chillHop () {
    return [
        {
            name: 'Canary Forest',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
            artist: 'Aso, Middle School, Aviino',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075" ,
            color: ['#205950', '#2ab3bf'],
            id:uuidv4(),
            active:true
        },
        {
            name: 'Rooftop Breeze',
            cover: 'https://chillhop.com/wp-content/uploads/2022/05/42878bcb02c1a3613f4913b226674cd36bac9830-1024x1024.jpg',
            artist: 'Smile High, Richard Vagner',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36650" ,
            color: ['#205950', '#2ab3bf'],
            id:uuidv4(),
            active:false
        },
        {
            name: 'Late Night Essentials',
            cover: 'https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg',
            artist: 'Philanthrope, mommy',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=35636" ,
            color: ['#205950', '#2ab3bf'],
            id:uuidv4(),
            active:false
        },
        {
            name: 'Nectarine',
            cover: 'https://chillhop.com/wp-content/uploads/2022/06/2b9d337d372db542748e2643dc90af62dd3418e2-1024x1024.jpg',
            artist: 'Es-K, Danny James, John Culbreth',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=34242" ,
            color: ['#205950', '#2ab3bf'],
            id:uuidv4(),
            active:false
        },
        {
            name: 'Blessed',
            cover: 'https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg',
            artist: 'Moods, Yasper',
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32860" ,
            color: ['#205950', '#2ab3bf'],
            id:uuidv4(),
            active:false
        },
    ]
}
export default chillHop;