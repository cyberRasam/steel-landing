// export default function Footer() {
//   return (
//     <footer className="bg-[var(--raspina-primary)] text-white py-8">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h4 className="font-bold">گسترش تجارت راسپینا</h4>
//         <p className="text-sm mt-2">
//           فروش انواع مقاطع فولادی - تماس: ۰۹۱۲-XXX-XXXX - ایمیل:
//           contact@raspina.example
//         </p>
//         <p className="text-xs mt-3 opacity-80">
//           © {new Date().getFullYear()} تمام حقوق محفوظ است.
//         </p>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="font-bold text-xl mb-2">گسترش تجارت راسپینا</h4>
        <p className="text-sm mb-2">
          فروش انواع مقاطع فولادی - تماس: -8135 2246 021 - ایمیل:
          Raspinatejarat22@gmail.com
        </p>
        <p className="text-sm mb-2">موبایل: 09059647272 - مقدم</p>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} تمام حقوق محفوظ است.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer">
            F
          </div>
          <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer">
            T
          </div>
          <div className="w-8 h-8 bg-white text-blue-600 flex items-center justify-center rounded-full cursor-pointer">
            I
          </div>
        </div>
      </div>
    </footer>
  );
}
