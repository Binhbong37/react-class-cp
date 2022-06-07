### Những lưu ý:

-   cách thức cp chạy
-   presetation Cp, container cp
-   router cho web
-   chú ý: Những function được định nghĩa bên ngoài render, muốn dùng từ khóa <this> cần phải bind ở constructor, hoặc dùng dưới dạng arrow FC

2. SPA:

-   SSR: là client gửi yêu cầu lên server và server trả kết quả về phía người dùng, mỗi lần yêu cầu nó sẽ tìm nạp và load lại tất cả trang (phần header, footer có thể sẽ bị gọi lại nhiều lần)
-   CSR: Lần đầu tiên sẽ load hết luôn, lưu trữ ở trong RAM, sau đó khi sử dụng sẽ chỉ lấy ra phần cần render lại, tăng trải nghiệm của người dùng

*   vẫn có giao tiếp với server nhưng chủ yếu là lấy dữ liệu, hoặc push dữ liệu lên

-   PARAMS ROUTER:

*   Muốn định nghĩa 1 component trong class fc và dùng lại thì phải định nghĩa theo kiểu arrow fc ở bên trong render(){}
    const NameComp = () => {}

-   Dùng uncotronler form

*   Dữ liệu được truy xuất từ DOM thông qua innerRef, không cần dùng state để set trạng thái ban đầu

### REDUX

-   mapStateToProps() {}: được gọi khi state trong store thay đổi

*   state của store redux còn props là của component view
*   trả về một obj with full data

-   mapDispatchToProps() {}: Những thay đổi mà từ comp view muốn gửi tới state của store
-   Sử dụng lại dùng this.props... để get dữ liệu

-   Khi truyền dữ liệu về redux cần phải chú ý thứ tự truyền, cái nào ghi trước ở phía dispatch thì cần phải truyền đúng thứ tự như vậy
