import React from 'react'

const Step1 = () => {
  return (
    <section class="max-w-6xl p-7 mx-3 md:p-12 md:m-auto">
        <form>
            <div class="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label for="first_name" class="block mb-2 text-base font-medium">ชื่อจริงของคุณ</label>
                    <input type="text" id="first_name" class="px-3 py-3 text-base block w-full" placeholder="" required />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-base font-medium">ชื่อธุรกิจของคุณ</label>
                    <input type="text" id="last_name" class="px-3 py-3 text-base block w-full" placeholder="" required />
                </div>
            </div>
            <div class="flex gap-3 mb-6">
                <div class="w-7/12">
                    <label for="first_name" class="block mb-2 text-base font-medium">ชื่อสินค้าหรือบริการ</label>
                    <input type="text" id="first_name" class="px-3 py-3 text-base block w-full" placeholder="" required />
                </div>
                <div class="w-2/12">
                    <label for="last_name" class="block mb-2 text-base font-medium">ราคา</label>
                    <input type="text" id="last_name" class="px-3 py-3 text-base block w-full" placeholder="" required />
                </div>
                <div class="w-3/12">
                    <label for="last_name" class="block mb-2 text-base font-medium">รูปภาพสินค้า</label>
                    <input type="file" id="myFile" class="px-3 py-2 text-base block w-full" />
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label for="message" class="block mb-2 text-base font-medium">
                        ประวัติธุรกิจ</label>
                    <textarea id="message" rows="4" class="px-3 py-3 text-base block w-full" placeholder=""></textarea>
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label for="message" class="block mb-2 text-base font-medium">
                        เพิ่มรูปภาพเกี่ยวกับธุรกิจของคุณ</label>
                    <input type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg" class="px-1.5 py-2 block w-full" />
                </div>
            </div>
            <div class="flex justify-end"><input type="button" value="ดำเนินการต่อ" class="bg-[#00CE6B] px-20 py-3 text-white buttonhover" /></div>
        </form>
    </section>
  )
}

export default Step1