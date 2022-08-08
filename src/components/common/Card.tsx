export default function Card({
  title,
  description,
  skills,
  float,
  bg,
  color,
}: any) {
  return (
    <div
      className={`h-auto w-auto ${bg} lg:relative lg:${float} lg:h-auto lg:w-[600px] hover:shadow-xl rounded-lg p-10`}
    >
      <h1 className={`text-2xl font-bold ${color}`}>{title}</h1>
      <p className={`text-xl ${color}  my-2`}>
        {description} (
        {skills.map((skill: string, index: number) => (
          <span className="font-bold" key={skill}>
            {skill}
            {index !== skills.length - 1 ? ", " : ""}
          </span>
        ))}
        )
      </p>
    </div>
  );
}
