1. Độ phức tạp thời gian (Time Complexity)
   - Khái niệm: Là phép đo lươnk thời gian cần thiết để hoàn thành công việc dựa trên kích thước đầu vào
   - Ý nghĩa: Đánh giá tốc độ thực thi của thuật toán khi kích thước đầu vào tăng lên
   - Ký hiệu: Sử dụng Big-O notation như
        O(1) Thời gian không đổi, không phụ thuộc vào kích thước đầu vào
        O(log n) Tâng chậm khi kích thước đầu vào tăng
        O(n) Tỷ lệ tuyến tính với kích thước đầu vào
        O(n2), O(2n) Thời gian tăng nhanh khi kích thước đầu vào tăng
   - Ví dụ:
        Duyệt mảng đơn gian có độ phức tạp O(n)
        Tìm kiếm nhị phân trong mảng đã sắp xếp có độ phức tạp O(log n)
2. Độ phức tạp không gian (Space Complexity)
   - Khái niệm: Là lượng bộ nhớ cần để thực thi bộ nhớ gồm: bộ nhớ cho biến, bộ nhớ tạm cho các thao tác trung gian, bộ nhớ đệ quy
   - Ý nghĩa: Đánh giá mức độ tiết kiệm tài nguyên bộ nhớ
   - Ví dụ:
        Thuật toán sắp xếp chèn (Insertion Sort) sử dụng không gian O(1) (chỉ cần một số biến tạm thời).
	    Merge Sort sử dụng không gian O(n) vì cần mảng phụ để trộn các phần tử.
3. Big-O notation
   Là cách biểu diễn độ phức tạp trong trường hợp xấu nhất

4. Case analysis
    Độ phức tạp trường hợp
    - Worst case: độ phức tạp khi thuật toán xử lý đầu vào tệ nhất
    - Best case: Độ phức tạp khi thuật toán xử lý đầu vào tốt nhất
    - Average-case (trường hợp trung bình): Độ phức tạp trung bình trên tất cả các đầu vào
6. Đệ quy và độ sâu đệ quy
7. Phân rã và chinh phục (divide and conquer)
8. Thuật toán tham lam (Greedy Algorithm)
9. Lập trình động (Dynamic Programming)
10. Tìm kiếm và Sắp xếp
11. Khả năng mở rộng (Scalability)
