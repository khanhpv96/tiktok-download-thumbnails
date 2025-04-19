# TikTok Thumbnail Downloader

Extension Chrome giúp tải xuống thumbnail của video TikTok từ trang profile người dùng.

## Tính năng

- Tự động phát hiện các video TikTok trên trang profile
- Thêm nút "Tải ảnh" ở góc phải mỗi video
- Khi click vào nút, sẽ tự động tải xuống thumbnail của video
- Tên file tải về sẽ được lấy từ alt text của ảnh (đã loại bỏ hashtag)

## Cách cài đặt

1. Tải xuống và giải nén thư mục extension
2. Mở Chrome, vào đường dẫn `chrome://extensions/`
3. Bật chế độ "Developer mode" (góc phải)
4. Click vào "Load unpacked" và chọn thư mục đã giải nén
5. Extension đã được cài đặt và sẵn sàng sử dụng

## Cách sử dụng

1. Truy cập vào trang profile TikTok bất kỳ (ví dụ: `https://www.tiktok.com/@congnghekhongkho5.0`)
2. Các nút "Tải ảnh" sẽ tự động xuất hiện ở góc phải mỗi video
3. Click vào nút để tải xuống thumbnail

## Lưu ý

- Extension chỉ hoạt động trên trang profile TikTok
- Cần phải cấp quyền downloads và activeTab cho extension
- Nếu không thấy nút tải xuống, hãy làm mới trang

## File cần chuẩn bị

1. `manifest.json` - Cấu hình của extension
2. `content.js` - Script chính để thêm nút tải xuống và xử lý tải ảnh
3. `styles.css` - CSS cho nút tải xuống
4. `background.js` - Script xử lý tải xuống trong background
5. `icon.png` - Icon cho extension

Có thể sử dụng bất kỳ icon nào bạn thích hoặc tạo mới.