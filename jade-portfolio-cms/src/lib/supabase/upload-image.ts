import { supabase } from "@/lib/supabase/client";

export async function uploadProjectThumbnail(file: File, projectId: string) {
  const fileExt = file.name.split(".").pop();
  const fileName = `projects/${projectId}/thumbnail.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from("portfolio-images")
    .upload(fileName, file, {
      upsert: true,
    });

  if (uploadError) {
    throw uploadError;
  }

  const { data } = supabase.storage
    .from("portfolio-images")
    .getPublicUrl(fileName);

  return data.publicUrl;
}