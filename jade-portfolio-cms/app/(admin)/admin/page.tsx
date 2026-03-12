import { supabase } from "@/lib/supabase/client";

export default async function Page() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*");
  console.log(projects);
  if (error) {
    console.error(error);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Admin 홈입니다.</p>

      <div className="mt-6">
        <h2 className="font-semibold mb-2">Projects</h2>

        <ul className="space-y-2">
          {projects?.map((project) => (
            <li key={project.id} className="border rounded p-2">
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}