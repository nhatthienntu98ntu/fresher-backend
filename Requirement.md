# Platfox Integrated Communication System

## Project 

### *Ứng dụng đặt cơm trưa cho team công ty*

## Description
- Ứng dụng web sử dụng Vuejs - Vuex - Typescript - Nodejs - Rocket Api

- Ứng dụng giúp quản lý và đặt cơm trưa cho các thành viên.

- Người Quản lý có thể thêm danh sách các món ăn hàng ngày, 
chọn các món ăn sẽ được order trong ngày đó, danh sách món ăn sau khi được chọn 
sẽ được thông báo lên group chat chung trên rocket.chat

- Danh sách sau khi được chọn sẽ gửi thông báo cho các thành viên, các thành viên khác 
sẽ nhận được thông báo đặt cơm và xác nhận có đặt cơm.

- Các thành viên khác có thể thấy được danh sách món ăn trên trang chủ.
- Khi mỗi thành viên chọn món ăn, món ăn đó sẽ được thông báo lên group chat chung trên rocket.chat
- Hệ thống tự động gửi thông báo nhắc đặt cơm hàng ngày vào khoảng thời gian cố định.
- Người quản lý có thể xem danh sách các thành viên đã đặt cơm, thống kê tổng hợp số lượng các món ăn được đặt

- Ứng dụng có thể mở rộng để sử dụng cho các mực đích khác, như đặt cơm, đặt nước, đặt đồ ăn, đặt đồ ship vv...

## Requirement 

- Ứng dụng web đơn giản giúp cho các thành viên order cơm.
- Quản lý user
- Quản lý thực đơn hàng ngày
- Post notification lên rocket.chat thông qua rocketApi

## Project structures 
- Frontend: Vuejs + Vuex + Typescript 
- Api: Axios, RocketApi
- Backend: Nodejs + Mongodb + MongoOse + Typescript