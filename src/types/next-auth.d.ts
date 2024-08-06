import 'nextAuth'
declare module 'next-auth'{
interface User{
    _id?:sring
}
}