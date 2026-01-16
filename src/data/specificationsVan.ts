// Used to extension cars on the Product
export interface CarColor {
  name: string;
  code: string;
  hex: string;
  image: string;
}
export interface VanModel {
  id: string;
  model: string;
  type: string;
  price: string;
  specs: { [key: string]: string };
  colors: CarColor[];
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

export const VanData: VanModel[] = [
{
  id: "ec-van-standard",
  model: "EC Van (Tiêu chuẩn)",
  type: "van",
  price: "285,000,000 VNĐ",
  distance: "285 KM",
  operate: "82 Hp",
  charging: "36 phút",
  specs: {
    "Động cơ": "01 Motor, 60 kW / 82 PS",
    "Mô-men xoắn": "220 Nm",
    "Tăng tốc": "13.8s (0-100km/h)",
    "Quãng đường": "285 km (theo NEDC)",
    "Thời gian sạc nhanh": "36 phút (10%-70%)",
    "Dẫn động": "RWD (Dẫn động cầu sau)",
    "Dung lượng pin": "41.9 kWh",
    "Kích thước": "4.270 x 1.768 x 1.927 mm",
    "Khoảng sáng gầm": "150 mm",
    "Dung tích khoang hàng / Số chỗ": "3.000 lít / 2 chỗ",
  },
  colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/EC/ecvan-white.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/EC/ecvan-xanh-reu.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#B22222",
        image: "/asset/Green/EC-Van/ecvan-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/EC/ecvan-yellow.png",
      },
    ],
  vfNameInComp: "VinFast EC Van",
  competitors: ["Wuling EV Van", "Dongfeng EV30"],
  comparisons: [
    {
      parameter: "Giá bán (ước tính)",
      values: [
        "285.000.000 VNĐ",
        "460.000.000 VNĐ (EV Van tiêu chuẩn, pin thuê riêng)",
        "490.000.000 VNĐ (EV30 bản tiêu chuẩn, pin 41 kWh)",
      ],
    },
    {
      parameter: "Phạm vi hoạt động",
      values: [
        "285 km (NEDC, thực tế ~230-250 km)",
        "300 km (NEDC, thực tế ~250-270 km)",
        "305 km (NEDC, thực tế ~260 km)",
      ],
    },
    {
      parameter: "Công suất",
      values: [
        "82 mã lực (60 kW), 220 Nm",
        "80 mã lực (58 kW), 220 Nm",
        "95 mã lực (70 kW), 230 Nm",
      ],
    },
    {
      parameter: "Thời gian sạc",
      values: [
        "36 phút (10-70% DC); 8 giờ AC đầy",
        "40 phút (10-70% DC); 9 giờ AC đầy",
        "35 phút (10-80% DC); 7 giờ AC đầy",
      ],
    },
    {
      parameter: "Tải trọng & dung tích",
      values: [
        "Tải trọng 500 kg, khoang hàng 3.000 lít",
        "Tải trọng 450 kg, khoang hàng 2.800 lít",
        "Tải trọng 600 kg, khoang hàng 3.200 lít",
      ],
    },
  ],
  content: {
    ct1: `<div class="flex flex-col items-center h-full">
    <div class="p-2 bg-white rounded-xl shadow-md border border-gray-200">
      <div class="flex flex-col text-xl font-semibold text-gray-700 mb-2">
        <span class="p-1 text-3xl font-bold">EC Van (Tiêu chuẩn)</span>
        <span class="mt-1 font-extrabold text-center">285.000.000 VNĐ</span>
    </div>
  </div>
      <div>
        <img src="/asset/EC/ecvan-red.png" 
        alt="EC Van" 
        class="p-3.5 justify-center " />
      </div>
      <div class="flex basis-1/2 ">
        <div>
          <img src="/asset/EC/ecvan-xanh-reu.png" 
          alt="EC Van" 
          class="p-3.5"/>
        </div>
        <div>
          <img src="/asset/EC/ecvan-yellow.png" 
          alt="EC Van" 
          class="p-3.5" />
        </div>
        <div></div>
      </div>`,
    ct11: `<h1 class="uppercase font-bold text-3xl my-3">Linh hoạt, tiết kiệm Tối ưu cho vận tải đô thị</h1>`,
    ct12: `<p class="my-3">VinFast EC Van – mẫu xe điện thương mại cỡ nhỏ, hướng đến doanh nghiệp và hộ kinh doanh cần phương tiện vận chuyển tiết kiệm, thân thiện môi trường. Với thiết kế nhỏ gọn, xe dễ dàng di chuyển trong phố hẹp, linh hoạt giao hàng nhanh chóng trong khu đô thị.</p>`,
    ct13: `<p class="my-3">EC Van được trang bị động cơ điện công suất 60 kW cùng pin 41,9 kWh, mang lại khả năng vận hành ổn định, bền bỉ với quãng đường di chuyển lên tới 285 km sau mỗi lần sạc. Thời gian sạc nhanh chỉ 36 phút giúp xe luôn sẵn sàng cho các chuyến giao hàng liên tục trong ngày.</p>`,
    ct14: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5 justify-center " />
    </div>`,
    ct15: `<p class="uppercase font-bold text-3xl my-3">Không gian chở hàng rộng rãi, bền bỉ</p>`,
    ct16: `<p class="my-3">Khoang hàng EC Van có dung tích lên đến 3.000 lít, sàn phẳng, thuận tiện cho việc sắp xếp hàng hóa. Xe hỗ trợ tải trọng 500 kg, đáp ứng nhu cầu vận chuyển hàng nhẹ và trung bình trong nội đô. Cửa sau mở rộng 180° và cửa lùa bên hông giúp việc bốc dỡ hàng nhanh chóng, tiết kiệm thời gian.</p>`,
    ct2: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-white.png" 
      alt="EC Van" 
      class="p-3.5 justify-center " />
    </div>`,
    ct21: `<p class="my-3">Thiết kế nội thất tập trung vào sự tiện dụng: ghế ngồi thoải mái, bảng điều khiển gọn gàng, dễ thao tác. Màn hình hiển thị thông tin rõ ràng, hỗ trợ người lái theo dõi tình trạng pin và quãng đường còn lại một cách trực quan.</p>`,
    ct22: `<p class="my-3">ABS, EBD, hệ thống hỗ trợ khởi hành ngang dốc và túi khí cho người lái. Hệ thống điều hòa và lọc không khí giúp môi trường cabin luôn dễ chịu trong mọi điều kiện thời tiết.</p>`,
    ct23: `<p class="my-3">EC Van là giải pháp vận chuyển tối ưu trong kỷ nguyên xanh – tiết kiệm chi phí vận hành, giảm phát thải CO₂ và tiếng ồn, đồng thời mang lại hình ảnh hiện đại cho doanh nghiệp.</p>`,
    ct24: `<div class="flex basis-1/2">
      <div>
        <img src="/asset/EC/ecvan-xanh-reu.png" 
        alt="EC Van" 
        class="p-3.5 h-full object-cover"/>
      </div>
      <div>
        <img src="/asset/EC/ecvan-yellow.png" 
        alt="EC Van" 
        class="p-3.5 h-full object-cover"/>
      </div>
    </div>`,
    ct25: `<h1 class="uppercase font-bold text-3xl my-3">Khả năng vận hành ổn định, bền bỉ</h1>`,
    ct26: `<p class="my-3">VinFast EC Van sử dụng dẫn động cầu sau (RWD) giúp xe phân bổ tải trọng hợp lý khi chở hàng nặng, giữ ổn định khi vào cua hoặc leo dốc. Hệ thống treo sau dạng lá nhíp chịu tải cao, bền bỉ, phù hợp với điều kiện đường phố Việt Nam.</p>`,
    ct3: `<p class="my-3">Pin của xe được tối ưu cho khả năng sạc nhanh, chỉ mất khoảng 36 phút để sạc từ 10%-70%. Điều này giúp doanh nghiệp duy trì hoạt động vận tải hiệu quả suốt cả ngày.</p>`,
    ct31: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5 justify-center " />
    </div>`,
    ct32: `<p class="uppercase font-bold text-3xl my-3">Thiết kế bền bỉ – tiết kiệm – thân thiện môi trường</p>`,
    ct33: `<p class="my-3">Với kết cấu khung gầm chắc chắn, pin đặt thấp dưới sàn giúp trọng tâm xe ổn định, giảm rung lắc khi di chuyển. Vật liệu thân xe nhẹ giúp tối ưu hiệu suất năng lượng, kéo dài quãng đường vận hành.</p>`,
    ct34: `<p class="my-3">EC Van được định vị là dòng xe thương mại xanh đầu tiên của VinFast, mang lại lợi ích kép: tiết kiệm chi phí nhiên liệu và góp phần bảo vệ môi trường đô thị.</p>`,
    ct35: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5" />
    </div>`,
    ct36: `<p class="my-3">VinFast EC Van có 3 màu sắc cơ bản: trắng, bạc và xanh dương – phù hợp với hình ảnh xe dịch vụ, vận tải nhẹ trong thành phố.</p>`,
    ct4: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5" />
    </div>`,
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
  id: "ec-van-advanced",
  model: "EC Van (Nâng cao)",
  type: "van",
  price: "305,000,000 VNĐ",
  distance: "285 KM",
  operate: "82 Hp",
  charging: "36 phút",
  specs: {
    "Động cơ": "01 Motor, 60 kW / 82 PS",
    "Mô-men xoắn": "220 Nm",
    "Tăng tốc": "13.8s (0-100km/h)",
    "Quãng đường": "285 km (theo NEDC)",
    "Thời gian sạc nhanh": "36 phút (10%-70%)",
    "Dẫn động": "RWD (Dẫn động cầu sau)",
    "Dung lượng pin": "41.9 kWh",
    "Kích thước": "4.270 x 1.768 x 1.927 mm",
    "Khoảng sáng gầm": "150 mm",
    "Dung tích khoang hàng / Số chỗ": "3.000 lít / 2 chỗ",
  },
  colors: [
      {
        name: "Trắng",
        code: "trang",
        hex: "#F9F9F9",
        image: "/asset/EC/ecvan-white.png",
      },
      {
        name: "Xanh rêu",
        code: "xanh-reu",
        hex: "#4B6F3F",
        image:
          "/asset/EC/ecvan-xanh-reu.png",
      },
      {
        name: "Đỏ",
        code: "do",
        hex: "#B22222",
        image: "/asset/Green/EC-Van/ecvan-red.png",
      },
      {
        name: "Vàng",
        code: "vang",
        hex: "#FFD700",
        image: "/asset/EC/ecvan-yellow.png",
      },
    ],
  vfNameInComp: "VinFast EC Van",
  competitors: ["Wuling EV Van", "Dongfeng EV30"],
  comparisons: [
    {
      parameter: "Giá bán (ước tính)",
      values: [
        "305.000.000 VNĐ",
        "460.000.000 VNĐ (EV Van tiêu chuẩn, pin thuê riêng)",
        "490.000.000 VNĐ (EV30 bản tiêu chuẩn, pin 41 kWh)",
      ],
    },
    {
      parameter: "Phạm vi hoạt động",
      values: [
        "285 km (NEDC, thực tế ~230-250 km)",
        "300 km (NEDC, thực tế ~250-270 km)",
        "305 km (NEDC, thực tế ~260 km)",
      ],
    },
    {
      parameter: "Công suất",
      values: [
        "82 mã lực (60 kW), 220 Nm",
        "80 mã lực (58 kW), 220 Nm",
        "95 mã lực (70 kW), 230 Nm",
      ],
    },
    {
      parameter: "Thời gian sạc",
      values: [
        "36 phút (10-70% DC); 8 giờ AC đầy",
        "40 phút (10-70% DC); 9 giờ AC đầy",
        "35 phút (10-80% DC); 7 giờ AC đầy",
      ],
    },
    {
      parameter: "Tải trọng & dung tích",
      values: [
        "Tải trọng 500 kg, khoang hàng 3.000 lít",
        "Tải trọng 450 kg, khoang hàng 2.800 lít",
        "Tải trọng 600 kg, khoang hàng 3.200 lít",
      ],
    },
  ],
  content: {
    ct1: `<div class="flex flex-col items-center h-full">
    <div class="p-2 bg-white rounded-xl shadow-md border border-gray-200">
      <div class="flex flex-col text-xl font-semibold text-gray-700 mb-2">
        <span class="p-1 text-3xl font-bold">EC Van (Nâng cao)</span>
        <span class="mt-1 font-extrabold text-center">305.000.000 VNĐ</span>
  </div>
      </div>
      <div>
        <img src="/asset/EC/ecvan-red.png" 
        alt="EC Van" 
        class="p-3.5 justify-center " />
      </div>
      
      <div class="flex basis-1/2 ">
        <div>
          <img src="/asset/EC/ecvan-xanh-reu.png" 
          alt="EC Van" 
          class="p-3.5"/>
        </div>
        <div>
          <img src="/asset/EC/ecvan-yellow.png" 
          alt="EC Van" 
          class="p-3.5" />
        </div>
      </div>`,
    ct11: `<h1 class="uppercase font-bold text-3xl my-3">Linh hoạt, tiết kiệm Tối ưu cho vận tải đô thị</h1>`,
    ct12: `<p class="my-3">VinFast EC Van – mẫu xe điện thương mại cỡ nhỏ, hướng đến doanh nghiệp và hộ kinh doanh cần phương tiện vận chuyển tiết kiệm, thân thiện môi trường. Với thiết kế nhỏ gọn, xe dễ dàng di chuyển trong phố hẹp, linh hoạt giao hàng nhanh chóng trong khu đô thị.</p>`,
    ct13: `<p class="my-3">EC Van được trang bị động cơ điện công suất 60 kW cùng pin 41,9 kWh, mang lại khả năng vận hành ổn định, bền bỉ với quãng đường di chuyển lên tới 285 km sau mỗi lần sạc. Thời gian sạc nhanh chỉ 36 phút giúp xe luôn sẵn sàng cho các chuyến giao hàng liên tục trong ngày.</p>`,
    ct14: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5 justify-center " />
    </div>`,
    ct15: `<p class="uppercase font-bold text-3xl my-3">Không gian chở hàng rộng rãi, bền bỉ</p>`,
    ct16: `<p class="my-3">Khoang hàng EC Van có dung tích lên đến 3.000 lít, sàn phẳng, thuận tiện cho việc sắp xếp hàng hóa. Xe hỗ trợ tải trọng 500 kg, đáp ứng nhu cầu vận chuyển hàng nhẹ và trung bình trong nội đô. Cửa sau mở rộng 180° và cửa lùa bên hông giúp việc bốc dỡ hàng nhanh chóng, tiết kiệm thời gian.</p>`,
    ct2: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-white.png" 
      alt="EC Van" 
      class="p-3.5 justify-center " />
    </div>`,
    ct21: `<p class="my-3">Thiết kế nội thất tập trung vào sự tiện dụng: ghế ngồi thoải mái, bảng điều khiển gọn gàng, dễ thao tác. Màn hình hiển thị thông tin rõ ràng, hỗ trợ người lái theo dõi tình trạng pin và quãng đường còn lại một cách trực quan.</p>`,
    ct22: `<p class="my-3">ABS, EBD, hệ thống hỗ trợ khởi hành ngang dốc và túi khí cho người lái. Hệ thống điều hòa và lọc không khí giúp môi trường cabin luôn dễ chịu trong mọi điều kiện thời tiết.</p>`,
    ct23: `<p class="my-3">EC Van là giải pháp vận chuyển tối ưu trong kỷ nguyên xanh – tiết kiệm chi phí vận hành, giảm phát thải CO₂ và tiếng ồn, đồng thời mang lại hình ảnh hiện đại cho doanh nghiệp.</p>`,
    ct24: `<div class="flex basis-1/2">
      <div>
        <img src="/asset/EC/ecvan-xanh-reu.png" 
        alt="EC Van" 
        class="p-3.5 h-full object-cover"/>
      </div>
      <div>
        <img src="/asset/EC/ecvan-yellow.png" 
        alt="EC Van" 
        class="p-3.5 h-full object-cover"/>
      </div>
    </div>`,
    ct25: `<h1 class="uppercase font-bold text-3xl my-3">Khả năng vận hành ổn định, bền bỉ</h1>`,
    ct26: `<p class="my-3">VinFast EC Van sử dụng dẫn động cầu sau (RWD) giúp xe phân bổ tải trọng hợp lý khi chở hàng nặng, giữ ổn định khi vào cua hoặc leo dốc. Hệ thống treo sau dạng lá nhíp chịu tải cao, bền bỉ, phù hợp với điều kiện đường phố Việt Nam.</p>`,
    ct3: `<p class="my-3">Pin của xe được tối ưu cho khả năng sạc nhanh, chỉ mất khoảng 36 phút để sạc từ 10%-70%. Điều này giúp doanh nghiệp duy trì hoạt động vận tải hiệu quả suốt cả ngày.</p>`,
    ct31: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5 justify-center " />
    </div>`,
    ct32: `<p class="uppercase font-bold text-3xl my-3">Thiết kế bền bỉ – tiết kiệm – thân thiện môi trường</p>`,
    ct33: `<p class="my-3">Với kết cấu khung gầm chắc chắn, pin đặt thấp dưới sàn giúp trọng tâm xe ổn định, giảm rung lắc khi di chuyển. Vật liệu thân xe nhẹ giúp tối ưu hiệu suất năng lượng, kéo dài quãng đường vận hành.</p>`,
    ct34: `<p class="my-3">EC Van được định vị là dòng xe thương mại xanh đầu tiên của VinFast, mang lại lợi ích kép: tiết kiệm chi phí nhiên liệu và góp phần bảo vệ môi trường đô thị.</p>`,
    ct35: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5" />
    </div>`,
    ct36: `<p class="my-3">VinFast EC Van có 3 màu sắc cơ bản: trắng, bạc và xanh dương – phù hợp với hình ảnh xe dịch vụ, vận tải nhẹ trong thành phố.</p>`,
    ct4: `<div class="flex justify-center">
      <img src="/asset/EC/ecvan-red.png" 
      alt="EC Van" 
      class="p-3.5" />
    </div>`,
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
]