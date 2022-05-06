# Reddit Clone Version 1.0.1

Time 2:12 5/7/2022

Anh Đức

Không còn sử dụng dữ liệu có sẵn nữa, thay vào đó là dữ liệu lấy trong csdl

Vì backend chưa được host nên sẽ không có đầu ra dữ liệu hiển thị trên Post

Thêm chức năng log out ....

## Sơ đồ cấu trúc UI :

WelcomePage:(WelcomePage.js)

    Login:
        Login.jsx

    Register:
        Register.jsx
MainPage:(MainPage.js)

    Navbar:
        Logo:
            Logo.js
        Search:
            SearchBar.js
        Action:
            Action.js
    Content:(Content.js)

        Trending:
            Trending.js

        Mainbar:(Mainbar.js)
            Post:
                Post.js

        SideBar:(SideBar.js)
            Community:
                Community.js