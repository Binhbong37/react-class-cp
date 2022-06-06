### Những lưu ý:

-   cách thức cp chạy
-   presetation Cp, container cp
-   router cho web
-   chú ý: Những function được định nghĩa bên ngoài render, muốn dùng từ khóa <this> cần phải bind ở constructor, hoặc dùng dưới dạng arrow FC

2. SPA:

-   SSR: là client gửi yêu cầu lên server và server trả kết quả về phía người dùng, mỗi lần yêu cầu nó sẽ tìm nạp và load lại tất cả trang (phần header, footer có thể sẽ bị gọi lại nhiều lần)
-   CSR: Lần đầu tiên sẽ load hết luôn, lưu trữ ở trong RAM, sau đó khi sử dụng sẽ chỉ lấy ra phần cần render lại, tăng trải nghiệm của người dùng

*   vẫn có giao tiếp với server nhưng chủ yếu là lấy dữ liệu, hoặc push dữ liệu lên
