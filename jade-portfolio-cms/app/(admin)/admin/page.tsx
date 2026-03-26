import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default async function Page() {
  const supabase = await createClient();

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*");

  if (error) {
    console.error(error);
  }

  const totalProjects = projects?.length ?? 0;
  projects?.forEach((project) => {
    console.log(project.is_published);
    console.log(project.display_order);
  });
  const publishedProjects =
    projects?.filter((project) => project.display_order).length ?? 0;
  const featuredProjects =
    projects?.filter((project) => project.display_order).length ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to your admin dashboard
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>총 프로젝트</CardDescription>
            <CardTitle className="text-2xl">{totalProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              현재 등록된 전체 프로젝트 수
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>공개 프로젝트</CardDescription>
            <CardTitle className="text-2xl">{publishedProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              사용자에게 노출 중인 프로젝트
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>대표 프로젝트</CardDescription>
            <CardTitle className="text-2xl">{featuredProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              메인에서 강조 표시할 프로젝트
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>비공개 프로젝트</CardDescription>
            <CardTitle className="text-2xl">
              {totalProjects - publishedProjects}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              아직 공개되지 않은 프로젝트
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Projects</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>제목</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>공개 여부</TableHead>
              <TableHead>대표 여부</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <Link href={`${project.live_url}`} target="_blank" className="contents">
                    <TableCell>{project.id}</TableCell>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {project.slug}
                    </TableCell>
                    <TableCell>
                      {project.display_order ? "공개" : "비공개"}
                    </TableCell>
                    <TableCell>
                      {project.display_order ? "대표" : "-"}
                    </TableCell>             
                  </Link>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-24 text-center text-muted-foreground"
                >
                  등록된 프로젝트가 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}