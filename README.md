# CoffeeStyle - Tailwind CSS Practice Project

Dự án luyện tập xây dựng giao diện website bán sản phẩm cà phê sử dụng Tailwind CSS.

## Demo

Xem demo tại: [https://tailwindcss-coffee-style-8d705.web.app/](https://tailwindcss-coffee-style-8d705.web.app/)

## Giới thiệu

Đây là một dự án thực hành Tailwind CSS với giao diện đơn giản, hiện đại cho một website bán cốc cà phê và phụ kiện. Dự án tập trung vào việc sử dụng các utility classes của Tailwind CSS để xây dựng responsive design.

## Tính năng

-   Giao diện hiện đại, responsive trên mọi thiết bị
-   Animation mượt mà với AOS (Animate On Scroll)
-   Mobile-first design
-   Parallax scrolling effects
-   Video background
-   Custom theme với màu sắc Coffee
-   Form đăng ký nhận tin

## Công nghệ sử dụng

-   **Tailwind CSS v4.1.7** - Framework CSS utility-first
-   **jQuery** - Xử lý interactive menu
-   **AOS Library** - Animation on scroll
-   **Firebase Hosting** - Deploy website

## Cấu trúc dự án

```
tailwindcss-coffee-style/
├── public/
│   ├── index.html          # Trang chính
│   ├── images/             # Hình ảnh sản phẩm
│   ├── videos/             # Video background
│   └── js/
│       └── main.js         # JavaScript logic
├── src/
│   └── input.css           # Custom CSS & Tailwind config
├── tailwind.config.js      # Cấu hình Tailwind
├── package.json
└── firebase.json           # Cấu hình Firebase
```

## Custom Theme

Dự án sử dụng custom color palette cho chủ đề Coffee:

```css
--color-coffee-50: #e8d6d0
--color-coffee-200: #c89f94
--color-coffee-400: #a25f4b
--color-coffee-600: #743f2f
```

## Cài đặt và chạy

1. Clone repository:

```bash
git clone https://github.com/hoangtuanqn/tailwindcss-coffee-style.git
cd tailwindcss-coffee-style
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Build Tailwind CSS (watch mode):

```bash
npm run build:css
```

4. Chạy development server:

```bash
npm run start:dev
```

5. Mở trình duyệt tại `http://localhost:8080`

## Scripts

-   `npm run build:css` - Build và watch Tailwind CSS
-   `npm run start:dev` - Chạy live-server

## Sections

Website bao gồm các sections:

1. **Header** - Navigation với responsive menu
2. **Hero Slider** - Banner chính với background image
3. **Story** - Giới thiệu về Coffee với video
4. **Featured Mugs** - Sản phẩm nổi bật
5. **More Products** - Danh sách sản phẩm (9 items)
6. **Magazine** - Ưu đãi tạp chí Coffee
7. **Parallax Section** - Hiệu ứng parallax
8. **Lifestyle Stories** - Blog posts
9. **Newsletter** - Form đăng ký nhận tin
10. **Footer** - Thông tin liên hệ và links