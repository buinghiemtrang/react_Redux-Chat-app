import * as types from "../constants/index";

const random = () => {
    let hour = Math.floor(Math.random() * 24);
    let minutes = Math.floor(Math.random() * 60);
    var time = hour + ":" + minutes;
    return time;
};

const init = [
    {
        filterText: false,
        id: 0,
        img: "https://media-cdn.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg",
        name: "Rosé 🖤",
        desc: "...",
        time: "11:00",
        chatroom1: [
            {
                content: "I can invite you to a restaurant tonight ?",
                user: "name",
                timeAt: random(),
            },
            {
                content:
                    "https://www.hoteljob.vn/files/Anh-HTJ-Hong/sai-lam-tai-hai-khien-nha-hang-ngay-cang-vang-khach-tt-1.jpg",
                user: "name",
                timeAt: random(),
            },
            { content: "of course 😙", user: "me", timeAt: random() },
            {
                content: "https://www.youtube.com/embed/_8ldAdQd9WU",
                user: "my",
                timeAt: random(),
            },
            { content: "Yeah 🥰", user: "name", timeAt: random() },
            { content: "What time do we leave?", user: "my", timeAt: random() },
            { content: "18:30 Bae", user: "name", timeAt: random() },
            { content: "Oke Bae 💖😘", user: "my", timeAt: random() },
        ],
    },

    {
        filterText: false,
        id: 1,
        img: "https://baokhanhhoa.vn/dataimages/202107/original/images5460086_B_n____m_i_c_a_Cristiano_Ronaldo_s__l______u_1.jpg",
        name: "Cristiano Ronaldo ⚽",
        desc: "...",
        time: "11:15",
        chatroom1: [
            { content: "Hello", user: "name", timeAt: random() },
            {
                content:
                    "https://vnn-imgs-f.vgcloud.vn/2021/09/11/12/ronaldo-mu-2.jpg",
                user: "name",
                timeAt: random(),
            },
            { content: "What your name ?", user: "name", timeAt: random() },
            { content: "My name is Trang", user: "my", timeAt: random() },
            { content: "Nice to meet you", user: "name", timeAt: random() },
            {
                content: "https://www.youtube.com/embed/Jk38OqdAQxc",
                user: "my",
                timeAt: random(),
            },
            { content: "Oh. Mee to ! 😁", user: "my", timeAt: random() },
        ],
    },

    {
        id: 2,
        filterText: false,
        img: "https://photo2.tinhte.vn/data/attachment-files/2020/08/5101401_cover_fb.jpg",
        name: "Mark Zuckerberg 📱",
        desc: "...",
        time: "15:09",
        chat: null,
        chatroom1: [
            { content: "Hey Trang", user: "name", timeAt: random() },
            { content: "😀😀", user: "my", timeAt: random() },
            {
                content: "Go to the swimming with me 🏊‍♀️ ?",
                user: "name",
                timeAt: random(),
            },
            {
                content:
                    "https://i.pinimg.com/474x/db/f2/2e/dbf22e3d8e6f87f7f896f110ef273f28.jpg",
                user: "name",
                timeAt: random(),
            },
            {
                content: "https://www.youtube.com/embed/awkkyBH2zEo",
                user: "name",
                timeAt: random(),
            },
            { content: "let'go bro 😉!", user: "my", timeAt: random() },
        ],
    },

    {
        filterText: false,
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
        name: "Bill Gates 💻",
        desc: "...",
        time: "10:05",
        chat: null,
        chatroom1: [
            {
                content:
                    "https://www.cocosenor.com/images/articles/computer/how-to-turn-on-off-windows-hello/windows-hello.png",
                user: "name",
                timeAt: random(),
            },
            { content: "What up bro", user: "name", timeAt: random() },
            { content: "😀😀", user: "my", timeAt: random() },
            {
                content: "https://www.youtube.com/embed/snjS-EaFnIc",
                user: "my",
                timeAt: random(),
            },
            { content: "Can you help me ? 😏", user: "name", timeAt: random() },
            { content: "Oke bro", user: "my", timeAt: random() },
        ],
    },
];

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
};
const data = (state = init, action) => {
    var name = action.name;
    var text = action.content;
    var stt = -1;
    var id = action.id;
    switch (action.type) {
        case types.CHAT_USER:
            stt = findIndex(state, id);
            if (stt !== -1) {
                state.forEach((items, index) => {
                    if (stt === index) {
                        let today = new Date();
                        let time = today.getHours() + ":" + today.getMinutes();
                        items.chatroom1.push({
                            timeAt: time,
                            content: text.content,
                            user: "my",
                        });
                    }
                });
            }
            return [...state];
        // case types.FILTER_CHAT:
        //     stt = findIndex(state, idFilter);
            
            
        //     if (stt !== -1) {
        //         state.forEach((item) => {
        //             if (stt === item.id) {
        //                 // state[stt] = {
        //                 //     ...state[stt],
        //                 //     filterText : !state[stt].filterText
        //                 // }
        //                 const newState = {
        //                     ...state[stt],
        //                     filterText : !state[stt].filterText
                            
        //                 }
        //                 state.splice(stt, 1);
        //                 state.unshift(newState)
        //                 console.log(state)

                    
        //             }
        //         });
        //     }
        //     return [...state];
        case types.ADD_GROUP:
            state.unshift({
                id: state.length,
                name: name,
                img: "https://cdn-icons-png.flaticon.com/512/745/745205.png",
                chatroom1: [],
                desc: "...",
            });

            return [...state];
        default:
            return [...state];
    }
};
export default data;
