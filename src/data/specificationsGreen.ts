export interface VinFastGreenModel {
  id: string;
  model: string;
  type: string;
  specs: { [key: string]: string };
  vfNameInComp: string;
  distance: string;
  operate: string;
  charging: string;
  competitors: string[];
  comparisons: Comparison[];
  content: {
    ct1: string;
    ct11: string;
    ct12: string;
    ct13: string;
    ct14: string;
    ct15: string;
    ct16: string;
    ct2: string;
    ct21: string;
    ct22: string;
    ct23: string;
    ct24: string;
    ct25: string;
    ct26: string;
    ct3: string;
    ct31: string;
    ct32: string;
    ct33: string;
    ct34: string;
    ct35: string;
    ct36: string;
    ct4: string;
    ct41: string;
    ct42: string;
    ct43: string;
    ct44: string;
    ct45: string;
    ct46: string;
    ct5: string;
    ct51: string;
    ct52: string;
    ct53: string;
    ct54: string;
    ct55: string;
    ct56: string;
    ct6: string;
    ct61: string;
    ct62: string;
    ct63: string;
    ct64: string;
    ct65: string;
    ct66: string;
  };
}

export interface Comparison {
  parameter: string;
  values: string[]; // [VF value, competitor1 value, competitor2 value]
}

export const vinFastGreenData: VinFastGreenModel[] = [
  {
    id: "minio-green",
    model: "Minio Green",
    type: "green",
    distance: "170 KM",
    operate: "27 Hp",
    charging:"30 phút",
    specs: {
      "Động cơ": "01 Motor, 20 kW / 27 PS",
      "Mô-men xoắn": "65 Nm",
      "Tăng tốc": "6.5s (0-50km/h)",
      "Quãng đường": "170 km (theo NEDC)",
      "Thời gian sạc nhanh": "30 phút (10%-70% AC 12kW)",
      "Dẫn động": "RWD (Dẫn động cầu sau)",
      "Dung lượng pin": "14.7 kWh",
      "Kích thước": "3.090 x 1.496 x 1.625 mm",
      "Khoảng sáng gầm": "150 mm",
      "Dung tích cốp / Số ghế": "200 lít / 4 ghế",
    },
    vfNameInComp: "VinFast Minio Green",
    competitors: ["MG Comet EV", "Tata Tiago EV"],
    comparisons: [
      {
        parameter: "Giá bán (ước tính)",
        values: [
          "269.000.000 VNĐ",
          "190-265.000.000 VNĐ (7-9.8 lakh INR, bản cao cấp ~265.000.000)",
          "215-300.000.000 VNĐ (8-11 lakh INR, tùy pin 19.2/24 kWh)",
        ],
      },
      {
        parameter: "Phạm vi hoạt động",
        values: [
          "170 km (NEDC, thực tế ~120-140 km)",
          "230 km (ARAI, thực tế ~180-200 km)",
          "250-315 km (ARAI, tùy pin; thực tế ~200-280 km)",
        ],
      },
      {
        parameter: "Công suất",
        values: [
          "27 PS (20 kW), 65 Nm",
          "41 PS (30 kW), 110 Nm",
          "61 PS (45 kW), 110 Nm (tùy bản)",
        ],
      },
      {
        parameter: "Thời gian sạc",
        values: [
          "30 phút (10-70% AC 12kW); 4-5 giờ AC đầy",
          "45 phút (10-100% AC, không DC nhanh); ~7 giờ đầy",
          "50-58 phút (10-90% DC); 3.6-8.8 giờ AC đầy",
        ],
      },
      {
        parameter: "Điểm an toàn",
        values: [
          "4 sao (dự kiến ASEAN NCAP; 1 túi khí, ABS, kiểm soát lực kéo, camera lùi)",
          "4 sao (Global NCAP, có ABS, EBD, 2 túi khí; yếu ở bảo vệ trẻ em)",
          "4 sao (Global NCAP, cao nhất phân khúc; có ABS, EBD, 2 túi khí, kiểm soát ổn định)",
        ],
      },
    ],
    content: {
      ct1: `<h1 class="uppercase font-bold text-3xl my-3">
      <div class="flex flex-row my-3">
      <div class="basis-1/2">
  <img src="/asset/Green/Minio/minio-1.png" 
       alt="Minio Green" 
       class="p-3.5" />
</div>
<div class="basis-1/2">
  <img src="/asset/Green/Minio/minio-2.png" 
       alt="Minio Green" 
       class="p-3.5" />
</div>
</div>
      
      Nhỏ gọn linh hoạt Ngôi sao đường phố</h1><p>Minio Green tối ưu cho những con phố chật hẹp với thiết kế nhỏ gọn, dễ dàng di chuyển và đậu, đỗ xe. Kiểu dáng MinioGreen hiện đại, phù hợp với nhiều phong cách từ sử dụng cá nhân đến kinh doanh dịch vụ. Minio Green có khoảng sáng gầm xe lý tưởng, giúp vượt chướng ngại vật dễ dàng. Cùng trải nghiệm “xe 4 bánh, tự do như 2” – Linh hoạt như xe máy, an toàn như xe hơi, phù hợp với mọi nhu cầu sử dụng..</p>`,
      ct11: `<p class="my-3">Động cơ điện của xe có công suất tối đa 20kW, pin có khả năng hoạt động tới 180 km sau mỗi lần sạc đầy, hỗ trợ cả sạc nhanh DC (công suất tối đa 12 kW) và sạc chậm AC (công suất tối đa 3,3 kW). Với hiệu quả kinh tế cao và khả năng vận hành linh hoạt, Minio Green là lựa chọn lý tưởng thay thế xe máy khi di chuyển nội đô, góp phần thay đổi diện mạo giao thông đô thị và nâng cao chất lượng cuộc sống cho người dân.</p>`,
      ct12: `<div class="flex justify-center">
  <img src="/asset/Green/Minio/minio-4.png" 
       alt="Minio Green" 
       class="p-3.5" />
</div>`,
      ct13: `<p class="my-3">Dòng xe Green không chỉ ghi điểm với giá cả cạnh tranh mà còn có chính sách bảo hành ấn tượng. Minio Green, Herio Green và Limo Green được bảo hành 7 năm hoặc 160.000km (tùy điều kiện nào đến trước) cho xe và 8 năm không giới hạn km cho pin.</p>`,
      ct14: `<p>Riêng Nerio Green, nếu mua để kinh doanh dịch vụ, thời gian bảo hành lên đến 10 năm hoặc 200.000km cho cả xe và pin.</p>`,
      ct15: null,
      ct16: null,
      ct2: `<h1 class="uppercase font-bold text-3xl my-3">Nhỏ gọn, đa năng cho năm 2025 bùng nổ</h1>`,
      ct21: `<p class="my-3">ĐÃ ĐẾN LÚC “Nhân đôi số bánh, nhân đôi cơ hội sinh lời” Với Minio Green, các Bác Tài có thể nghĩ đến việc nâng cấp xe 2 bánh lên 4 bánh để tăng thu nhập, an toàn, bền bì, đa dạng hơn về công năng sử dụng. Sở hữu Minio Green là sở hữu một chiếc xe ô tô điện nhỏ gọn nhưng đầy mạnh mẽ với chi phí đầu tư ban đầu thấp. Xe dễ dàng di chuyển trong nội đô với một số điểm nổi bật:</p>`,
      ct22: `<div class="flex justify-center">
  <img src="/asset/Green/Minio/minio-3.png" 
       alt="Minio Green" 
       class="p-3.5" /></div>`,
      ct23: `<ul class="list-disc list-inside my-3">
      <li>Thiết kế nhỏ gọn, linh hoạt trên mọi cung đường</li>
      <li>Công nghệ tiết kiệm năng lượng, sạc nhanh và bền bị</li>
      <li>Chi phí đầu tư ban đầu thấp, chi phí vận hành thấp, tối ưu lợi nhuận kinh doanh</li>
      <li>Thân thiện với môi trường hướng tới tương lai xe</li>
      <li>Hệ sinh thái trạm sạc của Vinfast rộng khắp.</li>
      </ul>`,
      ct24: null,
      ct25: null,
      ct26: null,
      ct3: `<h1 class="uppercase font-bold text-3xl my-3">Đậm chất xe mini đô thị</h1>`,
      ct31: `<p class="my-3">VinFast Minio Green sở hữu thiết kế nhỏ gọn với những đường nét bo tròn, đậm chất xe đô thị mini. Đầu xe ngắn với biểu tượng Logo VinFast chính giữa và tạo hình cánh chim dạng chrome trải rộng sang hai bên biểu trưng quen thuộc của VinFast; Cụm đèn pha dạng hình bán nguyệt, tuy nhiên Hãng chưa công bố thông số có phải dạng Led hay không.</p>`,
      ct32: `<div class="flex justify-center">
  <img src="/asset/Green/Minio/minio-5.png" 
       alt="Minio Green" 
       class="p-3.5" /></div>`,
      ct33: `<p class="my-3">Hộc gió trung tâm hình thang khá rộng trên cản trước; Nhiều chi tiết trên xe như cản trước/sau, vỏ đèn pha, ốp gương chiếu hậu, vành thép, ăng ten vây cá mập và viền bao quanh kính chắn gió sau đều sơn màu đen bóng, giúp mang đến vẻ đẹp hiện đại cho Minio Green.</p>`,
      ct34: `<div class="flex justify-center">
  <img src="/asset/Green/Minio/minio-6.png" 
       alt="Minio Green" 
       class="p-3.5" /></div>`,
      ct35: `<p class="my-3">Đuôi xe có thiết kế khá tương đồng các mẫu “Kei-car” của Nhật Bản, điều này giúp cho Kích thước chiều dài tổng thể của xe tiết kiệm và linh hoạt hơn trong nội đô đồng thời tạo không gian ngồi thoải mái hơn về chiều cao ở hàng ghế thứ 2. Tuy nhiên với thiết kế này không gian khoang hành lý sẽ không được tối ưu vì Minio Green đang tối ưu cho 4 chỗ thay vì đưa ra phiên bản Van 2 chỗ ngồi.</p>`,
      ct36: `<p class="my-3">Các chi tiết tạo hình Logo, cụm đèn hậu và phần cản sau xe thiết kế khá hài hòa bắt mắt. Phù hợp cho cả đối tượng Nam giới và nữ giới sử dụng.</p>`,
      ct4: `<div class="flex justify-center">
  <img src="/asset/Green/Minio/minio-7.png" 
       alt="Minio Green" 
       class="p-3.5" /></div>`,
      ct41: `<p class="my-3">VinFast Minio Green mở bán với 6 màu ngoại thất tùy chọn: Minio Green màu Đỏ, Minio Green màu Bạc, Minio Green màu Vàng, Minio Green màu Xanh, Minio Green màu Hồng, Minio Green màu Đen</p>`,
      ct42: `<p class="uppercase font-bold text-3xl my-3">Thiết kế thực dụng</p>`,
      ct43: `<p class="my-3">Tương tự nội thất xe VinFast VF3, Mino Green có thiết kế thực dụng hướng tới công năng sử dụng và không gian rộng rãi cho người lái và hành khách. Ở Minio Màn hình trug tâm được thiết kế phía sau Vô lăng, có khả năng kết nối điện thoại để thực hiện một số thao tác như giải trí (trình duyệt âm nhạc) hay nghe gọi, nhưng được nhận định có thể sẽ không thuận tiện như VF 3.</p>`,
      ct44: `<div class="flex flex-row my-3 ">
      <div class="basis-1/2">
  <img src="/asset/Green/Minio/Minio-8.png" 
       alt="Minio Green" 
       class="p-3.5 h-full object-cover" />
</div>
<div class="basis-1/2">
  <img src="/asset/Green/Minio/minio-9.png" 
       alt="Minio Green" 
       class="p-3.5 h-full object-cover" />
</div>
</div>`,
      ct45: `<p class="my-3">Phanh tay Mino Green dạng cơ học truyền thống; Không loại trừ khả năng VinFast Minio Green sẽ được trang bị cần số dạng cần gạt sau vô-lăng như VF 3. Những trang bị còn lại của Minio Green chưa được VinFast hé lộ.</p>`,
      ct46: `<div class="flex justify-center animate-pulse">
  <img src="/asset/Green/Minio/minio-7.png" 
       alt="Minio Green" 
       class="p-3.5" /></div>`,
      ct5: `<p class="my-3">Minio Green có kích thước nhỏ gọn, dễ dàng len lỏi qua những con phố đông đúc. Đồng thời chiều dài cơ sở 2.065 mm đảm bảo không gian nội thất rộng rãi cho 4 người. Đây là mẫu xe nhỏ nhưng mạnh mẽ, đáp ứng tốt các chuyến đi ngắn trong thành phố.
       VinFast Minio Green được trang bị động cơ điện 20 kW (26,8 mã lực), sản sinh mô-men xoắn 65 Nm và đạt tốc độ tối đa 80-85 km/h – phù hợp với giao thông đô thị. Công nghệ pin cho phép xe di chuyển 170 km chỉ trong 1 lần sạc đầy. Đây là tầm hoạt động lý tưởng cho nhu cầu di chuyển hàng ngày của tài xế dịch vụ hoặc người dùng cá nhân.</p>`,
      ct51: `<p class="uppercase font-bold text-3xl my-3">Vận hành an toàn</p>`,
      ct52: `<p class="my-3">Trải nghiệm giao thông an toàn với các tính năng tự động thông minh của VinFast Minio-Green. Giúp bạn vững vàng tay lái, an toàn trên mọi hành trình</p>`,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: null,
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    },
  },
  {
    id: "herio-green",
    model: "Herio Green",
    type: "green",
    distance: "326 KM",
    operate: "136 Hp",
    charging:"33 phút",
    specs: {
      "Động cơ": "01 Motor, 70 kW / 94 PS",
      "Mô-men xoắn": "150 Nm",
      "Tăng tốc": "8.5s (0-100km/h)",
      "Quãng đường": "300 km (theo NEDC)",
      "Thời gian sạc nhanh": "28 phút (10%-70%)",
      "Dẫn động": "FWD (Dẫn động cầu trước)",
      "Dung lượng pin": "37.23 kWh",
      "Kích thước": "3.967 x 1.723 x 1.578 mm",
      "Khoảng sáng gầm": "168 mm",
      "Dung tích cốp / Số ghế": "300 lít / 5 ghế",
    },
    vfNameInComp: "VinFast Herio Green",
    competitors: ["BYD Dolphin", "ORA Good Cat"],
    comparisons: [
      {
        parameter: "Giá bán (ước tính)",
        values: [
          "499.000.000 VNĐ",
          "659.000.000 VNĐ (niêm yết, không ưu đãi lớn)",
          "538-588.000.000 VNĐ (niêm yết, tùy pin LFP/Ternary)",
        ],
      },
      {
        parameter: "Phạm vi hoạt động",
        values: [
          "300 km (NEDC, thực tế ~240 km)",
          "405 km (NEDC, thực tế ~320 km)",
          "420 km (NEDC, thực tế ~340 km)",
        ],
      },
      {
        parameter: "Công suất",
        values: [
          "94 mã lực (70 kW), 150 Nm",
          "94 mã lực (70 kW), 180 Nm",
          "171 mã lực (126 kW), 250 Nm",
        ],
      },
      {
        parameter: "Thời gian sạc",
        values: [
          "28 phút (10-70% DC); 6 giờ AC đầy",
          "30 phút (30-80% DC); 6.5 giờ AC đầy",
          "45 phút (0-80% DC); 8 giờ AC đầy",
        ],
      },
      {
        parameter: "Điểm an toàn",
        values: [
          "4 sao (ASEAN NCAP; 6 túi khí, ABS, EBD, ESC, ADAS cơ bản)",
          "5 sao (Euro NCAP; 7 túi khí, ABS, ESC, hỗ trợ tránh va chạm)",
          "5 sao (C-NCAP; 6 túi khí, ABS, EBD, kiểm soát ổn định)",
        ],
      },
    ],
    content: {
      ct1: `<div class="flex flex-col items-center">
      <div>
  <img src="/asset/Green/Herio/Herio-1.png" 
       alt="Herio Green" 
       class="p-3.5 justify-center " /></div>
       <div class="flex basis-1/2 ">
       <div>
       <img src="/asset/Green/Herio/Herio-2.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>
       <div><img src="/asset/Green/Herio/Herio-3.png" 
       alt="Herio Green" 
       class="p-3.5" /></div>
       </div><p class="uppercase font-bold text-3xl my-3">Xe quốc dân – Vận hành linh hoạt</p>`,
      ct11: `<p class="my-3">VinFast Herio Green vốn đã quen thuộc với người dùng do được tinh chỉnh từ VF 5 và VF e34 để tối ưu chi phí và trang bị, qua đó giảm mức đầu tư và tăng hiệu quả kinh doanh, đều có thiết kế 5 chỗ ngồi. Trong đó, Herio Green được thiết kế phù hợp với phân khúc dịch vụ cơ bản, có khả năng di chuyển tối đa lên tới 326 km sau mỗi lần sạc đầy, thời gian sạc pin từ 10% lên 70% chỉ trong 33 phút.</p>`,
      ct12: `<div class="flex justify-center">
       <img src="/asset/Green/Herio/Herio-4.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>`,
      ct13: `<p class="my-3 font-bold">VinFast Herio Green được trang bị đầy đủ những công nghệ tiên tiến bậc nhất:</p>`,
      ct14: `<ul class="list-disc list-inside my-3">
      <li>Giám sát hành trình cơ bản</li>
      <li>Cảnh báo giao thông phía sau</li>
      <li>Cảnh báo điểm mù</li>
      <li>Hỗ trợ đỗ xe phía sau</li>
      <li>Hỗ trợ phanh khẩn cấp…</li>
      </ul>`,
      ct15: `<p class="font-bold my-3">Tích hợp các ứng dụng, tiện ích thông minh như:</p>`,
      ct16: `<p class="my-3">Trợ lý ảo điều khiển bằng giọng nói Giúp nâng tầm trải nghiệm và kiến tạo một phong cách sống đẳng cấp, văn minh, hiện đại cho người sở hữu…</p>`,
      ct2: `<div class="flex basis-1/2 h-full">
      <div>
       <img src="/asset/Green/Herio/Herio-5.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>
       <div>
       <img src="/asset/Green/Herio/Herio-6.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>
       </div>`,
      ct21: `<h1 class="uppercase font-bold text-3xl my-3">Khoang lái thoải mái Thiết kế thông minh</h1>`,
      ct22: `<div class="flex basis-1/2 h-full">
      <div>
       <img src="/asset/Green/Herio/Herio-7.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>
       <div>
       <img src="/asset/Green/Herio/Herio-8.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>
       </div>`,
      ct23: `<p class="my-3">VinFast Herio Green có thiết kế nội thất hài hòa, sang trọng, được trang bị đầy đủ tiện nghi. Chiều dài cơ sở lên đến 2514 mm, giúp khoang nội thất rộng rãi hơn nhiều mẫu xe trong cùng phân khúc. Xe được thiết kế 5 chỗ ngồi, ghế được bọc giả da, mang đến không gian rộng rãi và thoáng đãng cho hành khách trên xe.</p>`,
      ct24: `<p class="my-3">Tối ưu không gian cho tài xế vận hành nhiều giờ mà vẫn thư thái. Ghế ngồi thiết kế mỏng giúp mở rộng không gian để chân. Màn hình giải trí trung tâm trực quan, thao tác nhanh chóng. Hệ thống lọc không khí PM2.5 giúp khoang lái luôn trong lành, mang lại trải nghiệm dễ chịu cho cả tài xế và hành khách.</p>`,
      ct25: `<p class="uppercase font-bold text-3xl my-3">Bảng màu xe</p>`,
      ct26: null,
      ct3: `<p class="my-3">VinFast Herio Green mở bán với 4 màu ngoại thất cơ bản gồm: Herio Green màu đỏ, Herio Green màu vàng, Herio Green màu bạc, Herio Green màu đen.</p>
      <div class="flex justify-center">
       <img src="/asset/Green/Herio/Herio-9.png" 
       alt="Herio Green" 
       class="p-3.5"/></div>`,
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
      ct4: null,
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
      ct5: null,
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: null,
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    },
  },
  {
    id: "nerio-green",
    model: "Nerio Green",
    type: "green",
    distance: "318.6 KM",
    operate: "150 Hp",
    charging:"27 phút",
    specs: {
      "Động cơ": "01 Motor, 110 kW / 147 PS",
      "Mô-men xoắn": "242 Nm",
      "Tăng tốc": "9.0s (0-100km/h)",
      "Quãng đường": "285 km (theo NEDC)",
      "Thời gian sạc nhanh": "18 phút (10%-70%)",
      "Dẫn động": "FWD (Dẫn động cầu trước)",
      "Dung lượng pin": "42 kWh",
      "Kích thước": "4.300 x 1.768 x 1.613 mm",
      "Khoảng sáng gầm": "170 mm",
      "Dung tích cốp / Số ghế": "400 lít / 5 ghế",
    },
    vfNameInComp: "VinFast Nerio Green",
    competitors: ["BYD Atto 3", "Hyundai Kona Electric"],
    comparisons: [
      {
        parameter: "Giá bán (ước tính)",
        values: [
          "668.000.000 VNĐ",
          "766-886.000.000 VNĐ (Dynamic 766.000.000, Premium 886.000.000)",
          "850-950.000.000 VNĐ (bản Standard ~850.000.000; nhập khẩu)",
        ],
      },
      {
        parameter: "Phạm vi hoạt động",
        values: [
          "285 km (NEDC, thực tế ~220-250 km)",
          "410-480 km (NEDC, thực tế ~350-420 km)",
          "420 km (EPA, thực tế ~350 km)",
        ],
      },
      {
        parameter: "Công suất",
        values: [
          "147 mã lực (110 kW), 242 Nm",
          "204 mã lực (150 kW), 310 Nm",
          "201 mã lực (150 kW), 255 Nm",
        ],
      },
      {
        parameter: "Thời gian sạc",
        values: [
          "18 phút (10-70% DC); 7 giờ AC đầy",
          "30 phút (10-80% DC); 7-9 giờ AC đầy",
          "43 phút (10-80% DC); 5-6 giờ AC đầy",
        ],
      },
      {
        parameter: "Điểm an toàn",
        values: [
          "5 sao (ASEAN NCAP dự kiến; 6 túi khí, ABS, EBD, ESC, ADAS Level 2)",
          "5 sao (Euro NCAP; 7 túi khí, hỗ trợ tránh va chạm)",
          "5 sao (Euro NCAP; 6 túi khí, ADAS nâng cao)",
        ],
      },
    ],
    content: {
      ct1: `<div class="flex flex-col items-center h-full">
      <div>
        <img src="/asset/Green/Nerio/Nerio-1.png" 
       alt="Nerio Green" 
       class="p-3.5 justify-center " /></div>
       <div class="flex basis-1/2 ">
       <div>
       <img src="/asset/Green/Nerio/Nerio-2.png" 
       alt="Nerio Green" 
       class="p-3.5"/></div>
       <div><img src="/asset/Green/Nerio/Nerio-3.png" 
       alt="Nerio Green" 
       class="p-3.5" /></div>
       </div>`,
      ct11: `<h1 class="uppercase font-bold text-3xl my-3">Bền bỉ, linh hoạt Tối ưu cho mọi hành trình</h1>`,
      ct12: `<p class="my-3">Nerio Green – sản phẩm kết hợp công suất mạnh mẽ với khả năng vận hành ổn định trên nhiều địa hình. Xe linh hoạt trong phố, vững vàng trên đường trường. Với hệ thống pin tối ưu giúp quãng đường di chuyển dài hơn, tiết kiệm chi phí vận hành.</p>`,
      ct13: `<p class="my-3">VinFast Nerio Green có chiều dài cơ sở lên tới 2.611 mm, chiều dài tổng thể 4.300 mm, mang đến không gian nội thất rộng rãi, thoải mái cùng khoang chứa đồ lớn, phù hợp với phân khúc dịch vụ cao cấp hơn. Xe hướng đến nhóm khách hàng đề cao trải nghiệm ở hàng ghế sau cùng những tính năng thông minh, công nghệ an toàn hiện đại. Nerio Green có khả năng di chuyển tối đa hơn 318 km sau mỗi lần sạc đầy, thời gian sạc pin từ 10% lên 70% chỉ trong 27 phút.</p>`,
      ct14: `<div class="flex justify-center">
        <img src="/asset/Green/Nerio/Nerio-5.png" 
       alt="Herio Green" 
       class="p-3.5 justify-center " /></div>`,
      ct15: `<p class="uppercase font-bold text-3xl my-3">Công nghệ tiên tiến Kiểm soát dễ dàng</p>`,
      ct16: `<p class="my-3">Khoang lái rộng rãi, thiết kế thông minh giúp tài xế vận hành thoải mái. Màn hình trung tâm lớn, hỗ trợ trợ lý ảo và điều khiển bằng giọng nói. Camera 360 độ hữu dụng cùng hệ thống hỗ trợ lái giúp vận hành an toàn. Hệ thống lọc không khí tự động giữ khoang xe trong lành, đảm bảo trải nghiệm dễ chịu dù di chuyển trong đô thị hay trên đường dài.</p>`,
      ct2: `<div class="flex justify-center">
        <img src="/asset/Green/Nerio/Nerio-4.png" 
       alt="Herio Green" 
       class="p-3.5 justify-center " /></div>`,
      ct21: `<p class=" my-3">Với kích thức tổng thể lớn, cụm động cơ nhỏ gọn xo với các xe Xăng do đó nhường chỗ cho Nerio Green một không gian nội thất vô cùng rộng rãi và tiện nghi. Nội thất Nerio Green tiện nghi và hiện đại với cụm màn hình lớn thiết kế dạng dọc.</p>`,
      ct22: `<p class="my-3">Nội thất của Nerio Green được thiết kế với trọng tâm là sự thoải mái và tiện nghi, đặc biệt hướng đến hành khách ở hàng ghế sau – một yếu tố quan trọng cho dịch vụ vận tải cao cấp. Xe có 5 chỗ ngồi với ghế bọc giả da cao cấp, dễ lau chùi và bền bỉ, phù hợp với nhu cầu sử dụng thường xuyên của tài xế dịch vụ.</p>`,
      ct23: `<p class="my-3">Màn hình trung tâm tích hợp giao diện thông minh, hỗ trợ trợ lý ảo và điều khiển bằng giọng nói., giúp tài xế dễ dàng quản lý xe trong suốt hành trình. Không gian nội thất rộng rãi, mang lại chỗ để chân thoải mái cho cả hai hàng ghế. Camera 360 độ hữu dụng cùng hệ thống hỗ trợ lái giúp vận hành an toàn. Nerio Green trang bị hệ thống lọc không khí tự động giữ khoang xe trong lành, đảm bảo trải nghiệm dễ chịu dù di chuyển trong đô thị hay trên đường dài.</p>`,
      ct24: `<div class="flex basis-1/2">
      <div>
       <img src="/asset/Green/Nerio/Nerio-7.png" 
       alt="Herio Green" 
       class="p-3.5 h-full object-cover"/></div>
       <div>
       <img src="/asset/Green/Nerio/Nerio-8.png" 
       alt="Herio Green" 
       class="p-3.5 h-full object-cover"/></div>
       </div>`,
      ct25: `<h1 class="uppercase font-bold text-3xl my-3">Khả năng vận hành</h1>`,
      ct26: `<p class="my-3">VinFast Nerio Green được trang bị hiệu suất ổn định và công nghệ tiên tiến, đáp ứng tốt nhu cầu vận hành linh hoạt trong đô thị và các tuyến đường ngắn. Động cơ điện có công suất tối đa 110 kW với mô-men xoắn cực đại 242 Nm cho khả năng tăng tốc mượt mà, phù hợp với điều kiện giao thông Việt Nam. Động cơ đặt ở cầu trước đảm bảo khả năng xử lý tốt trên nhiều địa hình, đồng thời mang lại cảm giác lái nhẹ nhàng, êm ái nhờ loại bỏ tiếng ồn từ động cơ đốt trong.</p>`,
      ct3: `<p class="my-3">Pin của xe hỗ trợ quãng đường di chuyển tối đa 318,6 km trong một lần sạc đầy, với thời gian sạc nhanh từ 10%-70% chỉ trong 27 phút – một ưu điểm vượt trội giúp tài xế duy trì hoạt động liên tục.</p>`,
      ct31: `<div class="flex justify-center">
        <img src="/asset/Green/Nerio/Nerio-9.png" 
       alt="Herio Green"
       class="p-3.5 justify-center " /></div>`,
      ct32: `<p class="uppercase font-bold text-3xl my-3">Trọng tâm thấp giúp xe vận hành ổn định và an toàn hơn</p>`,
      ct33: `<p class="my-3">Xe được thiết kế với các khối Pin Lithium đặt dưới sàn xe, do đó trọng lượng xe được tập trung ở giữa xe và sàn xe. Từ đó giúp xe vận hành ổn định, vào cua êm hơn, ít rung lắc giảm thiểu những nguy cơ lật xe do thiết kế gầm cao.</p>`,
      ct34: `<p class="my-3">Ngoài ra, pack pin gần như chiếm toàn bộ phần sàn xe giúp gia cố thêm độ chắc chắn cho gầm xe khi có những tác động như va chạm ngang thân xe, giảm bớt các tác động của ngoại lực đảm bảo an toàn hơn cho người ngồi trên xe.</p>`,
      ct35: `<div class="flex justify-center">
        <img src="/asset/Green/Nerio/Nerio-10.png" 
       alt="Herio Green" 
       class="p-3.5" /></div>`,
      ct36: `<p class="my-3">VinFats Nerio Green mở bán với 4 màu sắc tùy chọn ngoại thất thời thượng đáp ứng đa dạng sở thích của khách hàng từ cá nhân đến doanh nghiệp. Các màu sắc ngoại thất của Nerio Green gồm: Nerio Green màu đỏ, Nerio Green màu vàng, Nerio Green màu bạc, Nerio Green màu đen.</p>`,
      ct4: `<div class="flex justify-center">
        <img src="/asset/Green/Nerio/Nerio-11.png" 
       alt="Herio Green" 
       class="p-3.5" /></div>`,
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
      ct5: null,
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: null,
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    },
  },
  {
    id: "limo-green",
    model: "Limo Green",
    type: "green",
    distance: "450 KM",
    operate: "273.3 Hp",
    charging:"30 phút",
    specs: {
      "Động cơ": "01 Motor, 150 kW / 204 PS",
      "Mô-men xoắn": "280 Nm",
      "Tăng tốc": "9.5s (0-100km/h)",
      "Quãng đường": "470 km (theo NEDC)",
      "Thời gian sạc nhanh": "30 phút (10%-70%)",
      "Dẫn động": "FWD (Dẫn động cầu trước)",
      "Dung lượng pin": "60.13 kWh",
      "Kích thước": "4.730 x 1.870 x 1.690 mm",
      "Khoảng sáng gầm": "170 mm",
      "Dung tích cốp / Số ghế": "500 lít / 7 ghế",
    },
    vfNameInComp: "VinFast Limo Green",
    competitors: ["Mitsubishi Xpander", "Toyota Veloz Cross"],
    comparisons: [
      {
        parameter: "Giá bán (ước tính)",
        values: [
          "749.000.000 VNĐ",
          "560-658.000.000 VNĐ (xăng, không ưu đãi lớn)",
          "638-660.000.000 VNĐ (xăng, tùy bản)",
        ],
      },
      {
        parameter: "Phạm vi hoạt động",
        values: [
          "470 km (NEDC, thực tế ~380-420 km)",
          "500-600 km (xăng, thực tế ~450 km; bình 45L)",
          "500-650 km (xăng, thực tế ~450 km; bình 45L)",
        ],
      },
      {
        parameter: "Công suất",
        values: [
          "204 mã lực (150 kW), 280 Nm",
          "102 mã lực, 141 Nm",
          "105 mã lực, 138 Nm",
        ],
      },
      {
        parameter: "Thời gian sạc/nạp",
        values: [
          "30 phút (10-70% DC 80kW); 8 giờ AC đầy",
          "N/A (xăng); 5 phút đầy bình",
          "N/A (xăng); 5 phút đầy bình",
        ],
      },
      {
        parameter: "Điểm an toàn",
        values: [
          "5 sao (dự kiến ASEAN NCAP; 6 túi khí, ABS, ESC, ADAS, camera 360°)",
          "4 sao (ASEAN NCAP; 2-6 túi khí tùy bản, ABS, ESC)",
          "5 sao (ASEAN NCAP; 6 túi khí, ABS, ESC, hỗ trợ tránh va chạm)",
        ],
      },
    ],
    content: {
       ct1: //`<div class="flex flex-col items-center h-full">
      // <div>
      //   <img src="/asset/Green/Limo/Limo-1.png" 
      //  alt="Limo Green" 
      //  class="p-3.5 justify-center " /></div>
      //  <div class="flex basis-1/2 ">
      //  <div>
      //  <img src="/asset/Green/Limo/Limo-2.png" 
      //  alt="Limo Green" 
      //  class="p-3.5"/></div>
      //  <div><img src="/asset/Green/Limo/Limo-3.png" 
      //  alt="Limo Green" 
      //  class="p-3.5" /></div>
      //  </div>`
      null,
      ct11: ` <div class="grid grid-cols-2 gap-4 p-3.5 w-full">
  <div>
    <img src="/asset/Green/Limo/Limo-4.png" alt="Limo Green" class="w-full p-3.5" />
  </div>
  <div>
    <img src="/asset/Green/Limo/Limo-5.png" alt="Limo Green" class="w-full p-3.5" />
  </div>
  <div>
    <img src="/asset/Green/Limo/Limo-6.png" alt="Limo Green" class="w-full p-3.5" />
  </div>
  <div>
    <img src="/asset/Green/Limo/Limo-7.png" alt="Limo Green" class="w-full p-3.5" />
  </div>
</div>`,
      ct12: `<p class="my-3">Mẫu xe đang rất được mong đợi là Limo Green 7 chỗ. Xe có kích thước các chiều 4.730 x 1.870 x 1.690 mm, chiều dài cơ sở 2.840 mm, đủ không gian rộng rãi cho 3 hàng ghế. Sử dụng pin LFP, Limo Green có khả năng di chuyển lên tới 470 km sau mỗi lần sạc đầy.</p>`,
      ct13: `<p class="uppercase font-bold text-3xl my-3">Không gian rộng rãi Hành trình thoải mái</p>`,
      ct14: `<p class="my-3">Thiết kế ngoại thất VinFast Limo Green mang phong cách hiện đại, các đường nét thiết kế khí động học mềm mại giúp tối ưu cho việc di chuyển và giảm mức tiêu thụ năng lượng.</p>`,
      ct16: null,
      ct21: `<p class="my-3">Đầu xe và đuôi xe Limo Green thiết kế đặc trưng phong cách của VinFast với biểu tượng logo chữ V ở giữ và dải led tạo hình cách chim trải rộng sang hai bên. mang lại hiệu ứng thương hiệu mạnh mẽ đặc biệt khi xe di chuyển buổi tối.</p>`,
      ct22: `<img src="/asset/Green/Limo/Limo-8.png" class="flex justify-center my-3"/>`,
      ct24: `<p class="uppercase font-bold text-3xl my-3">Thoáng đãng, tiện nghi & thoải mái</p>`,
      ct3: `<p class="my-3">Khoang nội thất thiết kế không quá chi tiết và cầu kỳ, tuy nhiên vẫn toát lên sự sang trọng và tối ưu cho không gian sử dụng. Xe có màn hình đa thông tin ở trung tâm táp lô, vô lăng 3 chấu hình D-cut. Khu vực bệ trung tâm có sự xuất hiện của cần số dạng núm xoay, hai vị trí để cốc và khu vực để điện thoại.</p>`,
      ct31: `<p class="my-3">Màn hình trung tâm trực quan, hệ thống lọc không khí PM2.5 giúp khoang xe luôn trong lành, đảm bảo những phút giây thư giãn thực sự trên những hành trình dài.</p>`,
      ct32: `<div class="flex flex-col">
      <div>
        <img src="/asset/Green/Limo/Limo-9.png" 
       alt="Limo Green" 
       class="p-3.5 justify-center w-full object-cover" /></div>
       <div class="flex basis-1/2 ">
       <div>
       <img src="/asset/Green/Limo/Limo-10.png" 
       alt="Limo Green" 
       class="p-3.5 object-cover"/></div>
       <div><img src="/asset/Green/Limo/Limo-11.png" 
       alt="Limo Green" 
       class="p-3.5 h-full object-cover" /></div>
       </div>`,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
      ct4: `<p class="uppercase font-bold text-3xl my-3">Lý tưởng cho những chuyến đi trọn vẹn</p>`,
      ct41: `<p class="my-3">Cung cấp sức mạnh cho Limo Green sẽ là động cơ điện 150kW (khoảng 201 mã lực) và mô-men xoắn cực đại 280Nm. Bộ pin đi kèm có dung lượng 60,13kWh, cho phép chạy tới 450km sau mỗi lần sạc.</p>`,
      ct42: `<p class="my-3">Hệ dẫn động của Limo Green là cầu trước, với 3 chế độ lái gồm Eco (tiết kiệm), Comfort (thoải mái) và Sport (thể thao). Xe được trang bị la-zăng 18 inch, phanh đĩa thông gió phía trước và đĩa tiêu chuẩn phía sau. Hệ thống treo trước dạng MacPherson và treo sau đa liên kết là những trang bị tập trung vào việc vận hành.</p>`,
      ct43: `<div class="flex justify-center"><img src="/asset/Green/Limo/Limo-12.png" 
       alt="Limo Green" 
       class="p-3.5 h-full object-cover" /></div>
       </div>`,
      ct44: `<p class="uppercase font-bold text-3xl my-3">Hệ thống an toàn</p>`,
      ct45: null,
      ct46: `<p class="my-3">Trải nghiệm giao thông an toàn với các tính năng tự động thông minh của VinFast Limo-Green. Giúp bạn vững vàng tay lái, an toàn trên mọi hành trình</p>`,
      ct5: null,
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: null,
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
      ct15: "",
      ct2: "",
      ct23: "",
      ct25: "",
      ct26: ""
    },
  },
];
