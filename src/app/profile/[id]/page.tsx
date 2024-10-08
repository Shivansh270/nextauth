export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <hr />
      <p className="text-4xl">
        Profile page
        <span className=" p-2 ml-2 rounded bg-orange-500 text-black">
          {/* id is the name of the folder */}
          {params.id}
        </span>
      </p>
    </div>
  );
}
