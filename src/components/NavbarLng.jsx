function NavbarLng(props) {
  return (
    <div className="bg-black text-gray-100 fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-3 lg:text-base text-sm">
        <div className="hidden md:block"></div>
        <div className="flex gap-4">
          <p className="hidden md:block">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="underline underline-offset-2">Shop now</button>
        </div>
        <div>English</div>
      </div>
    </div>
  );
}

export default NavbarLng;
